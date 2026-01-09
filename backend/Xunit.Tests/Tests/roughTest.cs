using Xunit;

public class CalculatorTests
{
    [Fact]
    public void Add_TwoNumbers_ReturnsSum()
    {
        // Arrange
        var a = 5;
        var b = 3;

        // Act
        var result = a + b;

        // Assert
        Assert.Equal(8, result);
    }
}
