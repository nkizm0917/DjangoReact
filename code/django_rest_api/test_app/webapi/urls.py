from django.urls import path
from . import views

urlpatterns = [
    path('api/profile/', views.ProfileListCreate.as_view() ),
    path('api/profile/<int:pk>/', views.ProfileRetrieve.as_view(), name='detail'),
    # path('api/profile/1/', views.ProfileListCreate.as_view(), name='detail'),
    path('api/geinin/', views.SimListCreate.as_view() ),
    path('api/geinin/<int:pk>/', views.SimRetrieve.as_view(), name='detail'),
]
