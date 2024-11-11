from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, 'hotelApp/home.html')

def menu(request):
    return render(request, 'hotelApp/menu.html')

def order(request):
    return render(request, 'hotelApp/order.html')

def contact(request):
    return render(request, 'hotelApp/contact.html')
