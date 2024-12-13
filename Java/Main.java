import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextln();
        int b = sc.nextln();

        int addition = a + b;
        System.out.println(addition);

        int substration = a - b;
        System.out.println(substration);

        int multiplication = a * b;
        System.out.println(multiplication);

        int division = a/b;
        System.out.println(division);

        int modulo = a%b;
        System.out.println(modulo);
    }
}
