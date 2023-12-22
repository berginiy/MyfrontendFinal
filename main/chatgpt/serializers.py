from rest_framework import serializers
from .models import ChatText, Story

from authapp.serializers import UsersSerializer


class StorySerializer(serializers.ModelSerializer):
    user = UsersSerializer()

    class Meta:
        model = Story
        fields = ['id', 'name', 'role', 'description', 'health', 'user']


class ChatGptSerializer(serializers.ModelSerializer):
    story = StorySerializer(required=False)

    class Meta:
        model = ChatText

        fields = ['id', 'text', 'answer_player', 'user', 'story']
