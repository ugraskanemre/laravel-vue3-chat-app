<?php

namespace App\Console\Commands; 

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Broadcast;
use \App\Events\NotifyUser;

class SendTimeNotificationCommand extends Command
{
  
    protected $signature = 'send:time-notification';


    protected $description = 'Her 15 dakikada bir saat bilgisi içeren mesajı gönderir';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $currentTime = now()->format('H:i');
        $message = "Guk guk! Saat $currentTime";  
      

        broadcast(new NotifyUser($message));


        $this->info("Mesaj gönderildi: $message");
    }
}
