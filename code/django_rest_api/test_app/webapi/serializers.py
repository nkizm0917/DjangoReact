from rest_framework import serializers
from webapi.models import Profile, Sim_results

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'name', 'email', 'message', 'created_at')

class SimSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sim_results
        fields = ('id', 'name', 'first', 'second', 'third')
