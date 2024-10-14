package codigo;


import java.util.Scanner;


public class Media2_numeros {
	
	public static void main(String[] args) throws Exception {		

		Scanner sc = new Scanner(System.in);
		System.out.print("Digita o primeiro numero: ");
		int num1 = sc.nextInt();
		System.out.println();
		System.out.print("Digita o segundo numero: ");
		int num2 = sc.nextInt();
		System.out.println();
		double media = (num1 + num2) / 2.0;
		System.out.println("Media = " + media);
		
		
		sc.close();
	}
	
}
