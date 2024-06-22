from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import *
from .models import *

# Create your views here.
class InstitutionViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = Institution.objects.all()
    serializer_class = InstitutionSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        inst = self.querySet.get(pk=pk)
        serializer = self.serializer_class(inst)
        return Response(serializer.data)

    def update(self, request, pk=None):
        inst = self.querySet.get(pk=pk)
        serializer = self.serializer_class(inst, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        inst = self.querySet.get(pk=pk)
        inst.delete()
        return Response(status=204)

class UserViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = User.objects.all()
    serializer_class = UserSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        user = self.querySet.get(pk=pk)
        serializer = self.serializer_class(user)
        return Response(serializer.data)

    def update(self, request, pk=None):
        user = self.querySet.get(pk=pk)
        serializer = self.serializer_class(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        user = self.querySet.get(pk=pk)
        user.delete()
        return Response(status=204)
    
class CourseViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = Course.objects.all()
    serializer_class = CourseSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        course = self.querySet.get(pk=pk)
        serializer = self.serializer_class(course)
        return Response(serializer.data)

    def update(self, request, pk=None):
        course = self.querySet.get(pk=pk)
        serializer = self.serializer_class(course, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        course = self.querySet.get(pk=pk)
        course.delete()
        return Response(status=204)
    
class ProgressViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = Progress.objects.all()
    serializer_class = CourseSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        progress = self.querySet.get(pk=pk)
        serializer = self.serializer_class(progress)
        return Response(serializer.data)

    def update(self, request, pk=None):
        progress = self.querySet.get(pk=pk)
        serializer = self.serializer_class(progress, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    # def destroy(self, request, pk=None):
    #     course = self.querySet.get(pk=pk)
    #     course.delete()
    #     return Response(status=204)
    
class EnrollmentViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = Enrollment.objects.all()
    serializer_class = CourseSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        enrol = self.querySet.get(pk=pk)
        serializer = self.serializer_class(enrol)
        return Response(serializer.data)

    def update(self, request, pk=None):
        enrol = self.querySet.get(pk=pk)
        serializer = self.serializer_class(enrol, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        enrol = self.querySet.get(pk=pk)
        enrol.delete()
        return Response(status=204)
    
class LessonViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = Lesson.objects.all()
    serializer_class = LessonSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        lesson = self.querySet.get(pk=pk)
        serializer = self.serializer_class(lesson)
        return Response(serializer.data)

    def update(self, request, pk=None):
        lesson = self.querySet.get(pk=pk)
        serializer = self.serializer_class(lesson, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        lesson = self.querySet.get(pk=pk)
        lesson.delete()
        return Response(status=204)
    
class QuizViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = Quiz.objects.all()
    serializer_class = QuizSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        quiz = self.querySet.get(pk=pk)
        serializer = self.serializer_class(quiz)
        return Response(serializer.data)

    def update(self, request, pk=None):
        quiz = self.querySet.get(pk=pk)
        serializer = self.serializer_class(quiz, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        quiz = self.querySet.get(pk=pk)
        quiz.delete()
        return Response(status=204)
    
class QuizQuestionViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = QuizQuestion.objects.all()
    serializer_class = QuizQuestionSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        qq = self.querySet.get(pk=pk)
        serializer = self.serializer_class(qq)
        return Response(serializer.data)

    def update(self, request, pk=None):
        qq = self.querySet.get(pk=pk)
        serializer = self.serializer_class(qq, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        qq = self.querySet.get(pk=pk)
        qq.delete()
        return Response(status=204)
    
class QuizAnswerViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = QuizAnswer.objects.all()
    serializer_class = QuizAnswerSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        qa = self.querySet.get(pk=pk)
        serializer = self.serializer_class(qa)
        return Response(serializer.data)

    def update(self, request, pk=None):
        qa = self.querySet.get(pk=pk)
        serializer = self.serializer_class(qa, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        qa = self.querySet.get(pk=pk)
        qa.delete()
        return Response(status=204)
    
class QuizResultViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = QuizResult.objects.all()
    serializer_class = QuizResultSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        qr = self.querySet.get(pk=pk)
        serializer = self.serializer_class(qr)
        return Response(serializer.data)

    def update(self, request, pk=None):
        qr = self.querySet.get(pk=pk)
        serializer = self.serializer_class(qr, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        qr = self.querySet.get(pk=pk)
        qr.delete()
        return Response(status=204)
    
class CertificationViewSet(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    querySet = Certification.objects.all()
    serializer_class = CertificationSerializer
    
    def list(self, request):
        querySet = self.querySet.all()
        serializer = self.serializer_class(querySet, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
            
    def retrieve(self, request, pk=None):
        cert = self.querySet.get(pk=pk)
        serializer = self.serializer_class(cert)
        return Response(serializer.data)

    def update(self, request, pk=None):
        cert = self.querySet.get(pk=pk)
        serializer = self.serializer_class(cert, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        cert = self.querySet.get(pk=pk)
        cert.delete()
        return Response(status=204)