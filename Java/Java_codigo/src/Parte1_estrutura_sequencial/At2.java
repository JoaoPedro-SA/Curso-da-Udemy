package Parte1_estrutura_sequencial;

import java.util.Scanner;

public class At2 {
	
	public static void main(String[] args) throws Exception {
			
		Scanner sc = new Scanner(System.in);
		System.out.print("digita o primeiro numero: ");
		int num1 = sc.nextInt();
		System.out.print("digita o segundo numero: ");
		int num2 = sc.nextInt();
		int soma = num1 + num2;
		System.out.print("SOMA = "+ soma);
		
		sc.close();
		
	}
}
	