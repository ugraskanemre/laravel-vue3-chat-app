<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\ChatMessage;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\SendMessageRequest;

class ChatController extends Controller
{


    public function chat(User $friend)
    {
        return view('chat', [
            'friend' => $friend
        ]);
    }


    public function index(User $friend)
    {
        $messages = ChatMessage::query()
            ->where(function ($query) use ($friend) {
                $query->where('sender_id', auth()->id())
                    ->where('receiver_id', $friend->id);
            })
            ->orWhere(function ($query) use ($friend) {
                $query->where('sender_id', $friend->id)
                    ->where('receiver_id', auth()->id());
            })
            ->with(['sender', 'receiver'])
            ->orderBy('id', 'asc')
            ->get();

        return response()->json($messages);
    }

    public function store(User $friend, SendMessageRequest $request)
    { 

        $message = ChatMessage::create([
            'sender_id' => auth()->id(),
            'receiver_id' => $friend->id,
            'text' => $request->input('message'),
        ]);

        broadcast(new MessageSent($message));

        return response()->json($message);
    }
}
