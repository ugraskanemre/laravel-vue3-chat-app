<x-app-layout>
    <x-slot name="header">
        <div class="flex items-center justify-between">
       
            <button onclick="window.history.back()" class="text-blue-500 hover:text-blue-700 flex items-center">
                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Geri Dön</span>
            </button>

         
            <h2 class="text-xl font-semibold leading-tight text-gray-800">
                {{ $friend->name }}
            </h2>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <chat-component :friend="{{ $friend }}" :current-user="{{ auth()->user() }}" />
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
