<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;


Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly(); 
 

Schedule::command('send:time-notification')->timezone('Europe/Istanbul')->cron('0,15,30,45 * * * *');
//Schedule::command('send:time-notification')->timezone('Europe/Istanbul')->everyMinute();
