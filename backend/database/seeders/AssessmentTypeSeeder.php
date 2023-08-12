<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AssessmentType;

class AssessmentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $assessmentTypes = [
            ['name' => 'Quiz'],
            ['name' => 'Assignment']
        ];

        foreach ($assessmentTypes as $assessmentType) {
            AssessmentType::create($assessmentType);
        }
    }
}
