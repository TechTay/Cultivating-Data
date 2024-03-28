from django.urls import path, include
from projects import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_project),
    path('all/', views.get_all_projects),
]
