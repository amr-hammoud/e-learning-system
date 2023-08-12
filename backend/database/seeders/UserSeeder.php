<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'first_name' => 'Admin',
                'last_name' => 'Account',
                'email' => 'admin@gmail.com',
                'password' => 'password',
                'user_type_id' => 1
            ]
        ];

        foreach ($users as $user) {
            User::create($user);
        }

    }
}
