package Parte1_estrutura_sequencial;

import java.util.Locale;
import java.util.Scanner;

public class At4 {
	
	public static void main(String[] args) {
		
		Locale.setDefault(Locale.UK);
		Scanner sc = new Scanner(System.in);
		System.out.print("Qual o numero do funcionario: ");
		int numFuncionario =  sc.nextInt();
		System.out.print("Qual o salario por hora: ");
		int salarioPorHora = sc.nextInt();
		System.out.print("Qual e a quantidade de horas trabalhadas: ");
		double horasTrabalhadas = sc.nextDouble();
		double salario = salarioPorHora * horasTrabalhadas;
		
		System.out.println("NUMBER = "+ numFuncionario);
		System.out.printf("SALARY = U$ %.2f%n", salario);
				
		sc.close();
		
	}

}
