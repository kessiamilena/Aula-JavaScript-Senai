// Digite o número do exercício que você quer exibir.
// se quiser sair, digite sair.

import PromptSync from "prompt-sync";
import { ex01 } from "./ex01.js";
import { ex02 } from "./ex02.js";
import { ex03 } from "./ex03.js";
import { ex04 } from "./ex04.js";
import { ex05 } from "./ex05.js";
import { ex06 } from "./ex06.js";

let prompt = PromptSync()

let resposta

do {

    console.log("Bem vindo ao menu de exercícios!")

    resposta = prompt("Digite um número de 1 a 6, para escolher um exercício ou 'sair' para interromper o programa: ")

    switch (resposta) {
        case "1": 
            ex01()
            break;
        case "2": 
            ex02()
            break;
        case "3": 
            ex03()
            break;
        case "4": 
            ex04()
            break;
        case "5": 
            ex05()
            break;
        case "6": 
            ex06()
            break;
        default: 
            console.log("Exercício não existe, tente novamente!")
            break;
    }

} while( resposta != "sair")

