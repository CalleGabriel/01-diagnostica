import java.util.Scanner;

public class Ejercicio2 {
    public static void main(String[] args) {
        // TODO: Instancia la clase Scanner
        Scanner Scanner = new Scanner (System.in);
        // TODO: Lee dos números por teclado
        System.out.println("Introduce el primer numero: ");
        int num1 = Scanner.nextInt();
        System.out.println("Introduce el segundo numero: ");
        int num2 = Scanner.nextInt();
        // TODO: Calcula y muestra suma, resta, multiplicación y división
        int suma = num1 + num2;
        int resta = num1 - num2;
        int mult = num1 * num2;
        int div = num1 / num2;

        System.out.println("Suma: "+ suma);
        System.out.println("Resta: "+ resta);
        System.out.println("Multiplicación: "+ mult);
        System.out.println("División: "+ div);
    }
}
