package Parte1_estrutura_sequencial;

public class FuncaoMatematica {

	public static void main(String[] args) throws Exception {
		
		double x = 3.0;
		double y = 4.0;
		double z = -5.0;
		double A, B, C;

		A = Math.sqrt(x);
		B = Math.sqrt(y);
		C = Math.sqrt(25.0);

		System.out.println("Raiz quadrada de " + x + " = " + A);
		System.out.println("Raiz quadrada de " + y + " = " + B);
		System.out.println("Raiz quadrada de 25 = " + C);

		A = Math.pow(x, 2);
		System.out.println(x + " elevado ao quadrado = " + A);

		A = Math.pow(5, 2);
		System.out.println("5 elevado ao quadrado = " + A);

		A = Math.abs(y);
		B = Math.abs(z);
		System.out.println("Valor absoluto de " + y + " = " + A);
		System.out.println("Valor absoluto de " + z + " = " + B);


	}

}
