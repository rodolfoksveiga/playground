from django.urls import path, include, re_path

urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.jwt'))
]

