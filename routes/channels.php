<?php


use Illuminate\Support\Facades\Broadcast;

/*Broadcast::channel('chat.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
}); */

Broadcast::channel('announcements', function ($message) {
    return true;
});
Broadcast::channel('notifications', function ($message) {
    return true;
});


Broadcast::channel('chat.{id}', function ($user, $id) {
    return true;
});
