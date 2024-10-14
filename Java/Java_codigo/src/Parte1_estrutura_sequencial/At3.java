package Parte1_estrutura_sequencial;

import java.util.Locale;
import java.util.Scanner;

public class At3 {

	public static void main(String[] args) throws Exception {
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		int num1, num2, num3, num4;
		System.out.println("DIGITA 4 numeros");
		num1 = sc.nextInt();
		num2 = sc.nextInt();
		num3 = sc.nextInt();
		num4 = sc.nextInt();
		int diferenca = num1 * num2 - num3 * num4;
		System.out.print("DIFERENCA = " + diferenca);
		sc.close();
 
	}
}
