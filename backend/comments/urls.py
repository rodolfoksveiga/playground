from django.urls import path

from .views import (
    CommentsList,
    CommentDetails
)

urlpatterns = [
    path('', CommentsList.as_view()),
    path('<int:pk>/', CommentDetails.as_view())
]

