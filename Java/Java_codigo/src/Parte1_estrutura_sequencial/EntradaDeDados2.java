package Parte1_estrutura_sequencial;

import java.util.Scanner;

public class EntradaDeDados2 {

	public static void main(String[] args) throws Exception {

		Scanner sc = new Scanner(System.in);

		String s1, s2, s3;

		s1 = sc.nextLine();
		s2 = sc.nextLine();
		s3 = sc.nextLine();
		
		System.out.println(s1);
		System.out.println(s2);
		System.out.println(s3);
		
		sc.close();
	}

}
