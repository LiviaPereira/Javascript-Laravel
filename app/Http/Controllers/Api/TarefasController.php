<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tarefa;

class TarefasController extends Controller
{
  
    public function index()
    {
        $tarefas = Tarefa::all();
        return response($tarefas);
    }

   
    public function store(Request $request)
    {
        //
    }

    
 
    public function update(Request $request, $id)
    {
        //
    }

  
    public function destroy($id)
    {
        //
    }
}
