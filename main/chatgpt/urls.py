from django.urls import path
from .views import ChatMasterView, StoryView,CustomUserList

urlpatterns = [
    path('game/', ChatMasterView.as_view(), name='game_master'),
    path('story/', StoryView.as_view(), name='story'),
    path('gameinfo/', CustomUserList.as_view(), name='list'),

]
