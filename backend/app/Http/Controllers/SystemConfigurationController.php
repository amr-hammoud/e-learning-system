<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SystemConfiguration;

class SystemConfigurationController extends Controller
{
    public function getConfigurations(){
        $configurations = SystemConfiguration::all();

        return response()->json([
            'status' => 'success',
            'configurations' => $configurations,
        ]);
    }

    public function getConfiguration($id){
        $configuration = SystemConfiguration::find($id);
        if (!$configuration){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid configuration id',
            ], 422);
        }

        return response()->json([
            'status' => 'success',
            'configuration' => $configuration,
        ]);
    }

    public function createConfiguration(Request $request){
        $request->validate([
            'name' => 'required|string|max:255|unique:system_configurations,name,',
            'color_primary' => 'required|string|max:255',
            'color_secondary' => 'required|string|max:255',
            'accent_primary' => 'required|string|max:255',
            'accent_secondary' => 'required|string|max:255',
            'text_primary' => 'required|string|max:255',
            'text_secondary' => 'required|string|max:255',
            'background_primary' => 'required|string|max:255',
        ]);

        $configuration = SystemConfiguration::create([
            'name' => $request->name,
            'color_primary' => $request->color_primary,
            'color_secondary' => $request->color_secondary,
            'accent_primary' => $request->accent_primary,
            'accent_secondary' => $request->accent_secondary,
            'text_primary' => $request->text_primary,
            'text_secondary' => $request->text_secondary,
            'background_primary' => $request->background_primary,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Configuration created successfully',
            'configuration' => $configuration,
        ]);
    }

    public function updateConfiguration(Request $request, $id){
        $request->validate([
            'name' => 'required|string|max:255|unique:system_configurations,name,',
            'color_primary' => 'required|string|max:255',
            'color_secondary' => 'required|string|max:255',
            'accent_primary' => 'required|string|max:255',
            'accent_secondary' => 'required|string|max:255',
            'text_primary' => 'required|string|max:255',
            'text_secondary' => 'required|string|max:255',
            'background_primary' => 'required|string|max:255',
        ]);

        $configuration = SystemConfiguration::find($id);
        if (!$configuration){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid configuration id',
            ], 422);
        }

        $configuration->update([
            'name' => $request->name,
            'color_primary' => $request->color_primary,
            'color_secondary' => $request->color_secondary,
            'accent_primary' => $request->accent_primary,
            'accent_secondary' => $request->accent_secondary,
            'text_primary' => $request->text_primary,
            'text_secondary' => $request->text_secondary,
            'background_primary' => $request->background_primary,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Configuration updated successfully',
            'configuration' => $configuration,
        ]);
    }

    public function deleteConfiguration($id){
        $configuration = SystemConfiguration::find($id);
        if (!$configuration){
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid configuration id',
            ], 422);
        }

        $configuration->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Configuration deleted successfully',
        ]);
    }

}
