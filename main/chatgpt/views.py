from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from .models import ChatText, Story
from openai import OpenAI
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ChatGptSerializer, StorySerializer

client = OpenAI(
    api_key="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",
)
# sadas


class CustomUserList(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Story.objects.all()
    serializer_class = StorySerializer


# sasa
class ChatMasterView(APIView):
    serializer_class = ChatGptSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        user = self.request.user

        # Поиск текущей истории для пользователя (предполагается, что у пользователя может быть только одна активная история)
        current_story = Story.objects.filter(user=user).latest('id')
        serializer = ChatGptSerializer(data=request.data)

        if serializer.is_valid():
            serializer.validated_data['user'] = user
            input_text = serializer.validated_data['text']
            serializer.validated_data['story'] = current_story

            chat_text = ChatText.objects.create(
                user=self.request.user,
                answer_player="это надо пофиксить",
                text=input_text,
                story=current_story,
            )
            chat_completion = client.chat.completions.create(
                messages=[
                    {
                        "role": "system",
                        "content": f"В конце ты должен описать что произойдет дальше с положительными или отрицательными эффектами которые возможно будет  менять Здоровье  и в конце истории будет указано оставшееся здоровье персонажа  в формате  Здоровье - {current_story.health}. Здоровье выводишь только 1 раз не более."
                    },
                    {
                        "role": "assistant",
                        "content": f"  {current_story.description}."
                    },
                    {
                        "role": "user",
                        "content": input_text,
                    }
                ],
                model="gpt-3.5-turbo",
                temperature=1,
                max_tokens=500
            )

            response_text = chat_completion.choices[0].message.content
            ChatText.objects.create(text=input_text, answer_player=response_text)

            health_indexes = [response_text.find("Здоровье - "), response_text.find("Здоровье игрока:")]
            health_values = []

            for index in health_indexes:
                if index != -1:
                    # Извлекаем числовое значение после фразы
                    value = int(response_text[index + len("Здоровье - "):].split('.')[0].strip())
                    health_values.append(value)

            # Используем более актуальное значение здоровья
            if health_values:
                current_story.health = max(health_values)
                current_story.save()
            response_text = response_text.replace(f"Здоровье игрока: {current_story.health}", "")
            response_data = {"text": f"{response_text} Здоровье игрока: {current_story.health}"}

            return Response(response_data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StoryView(APIView):
    serializer_class = StorySerializer
    permission_classes = [IsAdminUser]

    def post(self, request, *args, **kwargs):
        serializer = StorySerializer(data=request.data)

        if serializer.is_valid():
            # Укажите пользователя в объекте Story
            serializer.validated_data['user'] = self.request.user
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        stories = Story.objects.all()
        serializer = StorySerializer(stories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
