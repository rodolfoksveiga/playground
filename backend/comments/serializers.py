from rest_framework import serializers

from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Comment
        fields = [
            'id',
            'modified_at',
            'body',
            'post',
            'user',
            'username'
        ]

