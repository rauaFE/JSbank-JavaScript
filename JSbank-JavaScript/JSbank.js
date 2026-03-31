const prompt = require("prompt-sync")();

let menu = 0
let saldo = 1000
let saldo_depositado = 0
let menu_voltar = 0
let valor_de_deposito = 0
let valor_de_saque = 0

while (menu >= 0 && menu <= 4)
{
if (menu_voltar == 0)
{
    menu = Number(prompt(`\n\nBem vindo(a) ao JSbank! \n\n 1. Saldo \n 2. Saldo Depositado \n 3. Depositar \n 4. Sacar \n 5. Sair \n\n Digite uma opção: \n`))
}

if (menu == 1)
{
    menu_voltar = Number(prompt(`\n\nSeu saldo é de R$${saldo} \n\n Digite 0 para voltar: \n`))
}

if (menu == 2)
{
    menu_voltar = Number(prompt(`\n\nSeu saldo depositado é de R$${saldo_depositado} \n\n Digite 0 para voltar: \n`))
}

while (menu == 3)
{
    valor_de_deposito = Number(prompt(`\n\nQuanto deseja depositar? \n\n Digite 0 para voltar: \n`))

    if (valor_de_deposito == 0)
    {
        menu_voltar = 0
        menu = 0
    }
    if (valor_de_deposito<=saldo)
    {
    saldo_depositado = valor_de_deposito + saldo_depositado
    saldo = saldo - valor_de_deposito
    }
}

while (menu == 4)
{
    valor_de_saque = Number(prompt(`\n\nQuanto deseja sacar?  \n\n Digite 0 para voltar: \n`))
    if (valor_de_saque==0)
    {
        menu_voltar = 0
        menu = 0
    }
    if (valor_de_saque <= saldo_depositado)
    {
        saldo_depositado = saldo_depositado - valor_de_saque
        saldo = valor_de_saque + saldo
    }

}

if (menu==5)
{
    console.log("Obrigado por usar nosso sistema!")
}

if (isNaN(menu) || menu < 0 || menu > 5 )
{
    menu=0
}

}