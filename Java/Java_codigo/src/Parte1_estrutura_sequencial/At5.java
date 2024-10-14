package Parte1_estrutura_sequencial;

import java.util.Locale;
import java.util.Scanner;

public class At5 {

	public static void main(String[] args) throws Exception {
		Locale.setDefault(Locale.US);;
		Scanner sc = new Scanner(System.in);
		int numeroPecas,valorUnitario;
		double valorDaPecas;
		System.out.println("Digita os valores de entrada:");
		numeroPecas = sc.nextInt();
		valorUnitario =  sc.nextInt();
		valorDaPecas = valorUnitario *  sc.nextDouble();
		int numeroPecas2,valorUnitario2;
		double valorDaPecas2;
		System.out.println("Digita os valores de entrada:");
		numeroPecas2 = sc.nextInt();
		valorUnitario2 = sc.nextInt();
		valorDaPecas2 = valorUnitario2 * sc.nextDouble();	
		numeroPecas = numeroPecas * numeroPecas2;
		
		double calculo = valorDaPecas + valorDaPecas2;
		System.out.printf("VALOR A PAGAR: R$%.2f%n ", calculo);
		
		
		
		
		sc.close();
		

	}

}
