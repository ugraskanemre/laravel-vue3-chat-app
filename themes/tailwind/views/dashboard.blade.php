<style>
    .truncate-message {
        display: inline-block;
        max-width: 200px;
        /* Metin genişliğini burada belirleyin */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>


<x-app-layout>

    <x-slot name="header">
        <h2 class="text-xl font-semibold leading-tight text-gray-800">
            {{ __('Sohbet') }}
        </h2>
    </x-slot>
    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="h-[500px] overflow-y-auto bg-gray-100 p-4">
                        <div class="space-y-6">
                            @foreach ($users as $user)
                            <div class="bg-white shadow-sm sm:rounded-lg p-4">
                                <div class="flex items-center justify-between">


                                    <a href="{{ route('chat', $user) }}" class="flex items-center flex-1">
                                        <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mr-4">
                                            <img src="https://ui-avatars.com/api/?name={{ urlencode($user->name) }}&background=random" alt="{{ $user->name }}" class="w-full h-full object-cover">
                                        </div>
                                        <div>
                                            <div class="text-sm font-medium text-gray-900">{{ $user->name }}</div>
                                            <div class="text-sm text-gray-500">{{ $user->email }}</div>
                                        </div>
                                    </a>


                                    <div class="text-sm text-gray-500 text-right">
                                        @if ($user->lastMessage)
                                        <span class="truncate-message">{{ $user->lastMessage->text }}</span>
                                        @else
                                        Mesaj yok
                                        @endif
                                    </div>

                                </div>
                            </div>
                            @endforeach
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div> 

</x-app-layout>