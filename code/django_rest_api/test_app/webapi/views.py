from django.shortcuts import render

# Create your views here.
from webapi.models import Profile, Sim_results
from webapi.serializers import ProfileSerializer, SimSerializer
from rest_framework import generics

class ProfileListCreate(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileRetrieve(generics.RetrieveAPIView):
    # queryset = Profile.objects.get(pk=prof_id)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class SimListCreate(generics.ListCreateAPIView):
    queryset = Sim_results.objects.all()
    serializer_class = SimSerializer

class SimRetrieve(generics.RetrieveAPIView):
    queryset = Sim_results.objects.all()
    serializer_class = SimSerializer
