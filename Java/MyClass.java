package Java;

abstract class Citizens {
    abstract void getAge();
}

class SeniorCitizens extends Citizens {
    void getAge() {
        System.out.println("Age is above 60");
    }
}

class Adults extends Citizens {
    void getAge() {
        System.out.println("Age is between 19 and 59 both inclusive");
    }
}

class Children extends Citizens {
    void getAge() {
        System.out.println("Age is below 19");
    }
}

public class MyClass {
    public static void main(String args[]) {
        Citizens a = new Citizens();
        a.getAge();
    }
}