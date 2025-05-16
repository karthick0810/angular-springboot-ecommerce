# Stage 1: Build the application using Maven
FROM maven:3.9.6-eclipse-temurin-17 AS builder

# Clone and build the project
RUN git clone https://github.com/karthick0810/angular-springboot-ecommerce.git /app
WORKDIR /app/backend
RUN mvn clean package -DskipTests

# Stage 2: Use JDK runtime to run the jar
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy the built JAR from the builder stage
COPY --from=builder /app/backend/target/backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the JAR
ENTRYPOINT ["java", "-jar", "app.jar"]
