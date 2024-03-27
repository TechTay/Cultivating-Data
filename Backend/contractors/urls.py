from django.urls import path, include
from contractors import views


urlpatterns = [
    path('', views.user_contractor),
    path('all/', views.get_all_contractors),
]