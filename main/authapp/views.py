from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import UserRegisSerializer, ChangePasswordSerializer, UsersSerializer
from .models import CustomUser
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status


class RegistrationAPIView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserRegisSerializer

    def post(self, request, *args, **kwargs):
        serializer = UserRegisSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomUserLoginView(TokenObtainPairView):
    pass


class CustomUserList(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = CustomUser.objects.all()
    serializer_class = UsersSerializer


class CustomUserUpdate(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UsersSerializer
    queryset = CustomUser.objects.all()


class UserInfoAPIView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UsersSerializer()

    def get(self, request, *args, **kwargs):
        user_serializer = UsersSerializer(request.user)
        return Response(user_serializer.data)


class ChangePasswordAPIView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ChangePasswordSerializer

    def post(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user

            old_password = serializer.validated_data['old_password']
            new_password = serializer.validated_data['new_password']

            if not user.check_password(old_password):
                return Response({'detail': 'Invalid old password'}, status=status.HTTP_400_BAD_REQUEST)

            user.set_password(new_password)
            user.save()
            return Response({'detail': 'Password changed successfully'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomUserTokenRefreshView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            access_token = str(token.access_token)
            return Response({'access': access_token}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'invalid token'}, status.HTTP_401_UNAUTHORIZED)


# class AllUsersView(APIView):
#     def get_queryset(self):
#         return CustomUser.objects.all()
#
#     def get(self, request):
#         users = self.get_queryset()
#         serializer = UserSerializer(users, many=True)
#         return Response(serializer.data)
#
#     # def put(self, request, *args, **kwargs):
#     #     pk = kwargs.get("pk",None)
#     #     if not pk:
#     #         return Response({"error": "Method put not allowed"})
#     #     try:
#     #         instance = CustomUser.objects.get(pk=pk)
#     #     except:
#     #         return Response({"error": "Objects does not exist "})
#     #     serializer = UserSerializer(data=request.data, instance=instance)
#     #     serializer.is_valid(raise_exception=True)
#     #     serializer.save()
#     #     return Response({"post": serializer.data})



    
