package Parte1_estrutura_sequencial;

import java.util.Locale;
import java.util.Scanner;

public class At1 {
	
	public static void main(String[] args) throws Exception 
	{
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		double pi = 3.14159;
		System.out.print("Digite o raio : ");
		double raio = sc.nextDouble();
		double area = pi * (Math.pow(raio, 2));
		System.out.printf("A="+"%.4f%n",area);
		
		
		sc.close();
	} 
	
}
