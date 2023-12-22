# chatgpt/admin.py
from django.contrib import admin
from .models import ChatText, Story


class StoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'role', 'description', 'health', 'user')
    search_fields = ('name', 'user__username')

    def get_queryset(self, request):
        # Переопределение метода get_queryset для фильтрации записей по текущему пользователю
        qs = super().get_queryset(request)
        if not request.user.is_superuser:
            qs = qs.filter(user=request.user)
        return qs


admin.site.register(ChatText)
admin.site.register(Story, StoryAdmin)
