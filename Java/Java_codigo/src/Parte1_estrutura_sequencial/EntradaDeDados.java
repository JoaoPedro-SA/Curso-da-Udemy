package Parte1_estrutura_sequencial;

import java.util.Locale;
import java.util.Scanner;

public class EntradaDeDados {

	public static void main(String[] args) throws Exception {

		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);

		String x;
		x = sc.next();

		System.out.println("voce digitou: " + x);

		int num;
		num = sc.nextInt();

		System.out.println("voce digitou: " + num);

		double numDouble;
		numDouble = sc.nextDouble();

		System.out.println("voce digitou: " + numDouble);

		sc.close();

	}

}
