# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT ProductName, CategoryName FROM Products JOIN Categories ON Products.CategoryId = Categories.CategoryId;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT OrderId, ShipperName FROM Orders Join Shippers ON Orders.ShipperId = Shippers.ShipperId WHERE OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity FROM OrderDetails JOIN Products ON OrderDetails.ProductId = Products.ProductId WHERE OrderId = 10251 ORDER BY ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT OrderId, CustomerName, LastName FROM Orders
JOIN Customers ON Orders.CustomerId = Customers.CustomerId
JOIN Employees ON Orders.EmployeeId = Employees.EmployeeId
