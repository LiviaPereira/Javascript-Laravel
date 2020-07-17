<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::get('/tarefas', function(){
//     return response(["msg" => "Feito!!!"]);
// });


Route::get('/tarefas', 'Api\TarefasController@index');

Route::post('/login', 'Api\AuthController@login');

// * get /tarefas [ => LISTAR TODAS AS TAREFAS
// post /tarefas => CRIAR UMA TAREFA
// delete /tarefas/1 => APAGAR A TAREFA 1
// put /tarefas1 => ALTERAR A TAREFA 1
// * put /tarefas/1/feito => MARCA TAREFA COMO FEITA
// put /tarefas/1/desfeito => MARCA TARECA COMO NÃO FEITA
