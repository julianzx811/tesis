from django.db import models

class Empresa(models.Model):
    EmpresaId = models.IntegerField(primary_key=True, null=False)
    Empresa_Nombre = models.CharField(max_length=255, null=False)
    link = models.CharField(max_length=1000)

class Producto_categoria(models.Model):
    CategoriaID = models.IntegerField(primary_key=True, null=False)
    Categoria = models.CharField(max_length=255, null=False)
    icono = models.CharField(max_length=255,null=False)

class Tienda(models.Model):
    TiendaId = models.IntegerField(primary_key=True, null=False)
    Tienda_Nombre = models.CharField(max_length=255, null=False)
    latitude = models.FloatField(null=False)
    longitude = models.FloatField( null=False)
    latitudeDelta = models.FloatField(null=False)
    longitudeDelta = models.FloatField( null=False)
    empresaId = models.OneToOneField(Empresa, on_delete=models.CASCADE)

class Producto_info(models.Model):
    ProductInfoId = models.IntegerField(primary_key=True, null=False)
    precio = models.CharField(max_length=255,null=False)
    Disponibilidad = models.CharField(max_length=255,null=False)
    Imagen = models.CharField(max_length=255,null=False)
    Descripcion = models.CharField(max_length=4000,null=False)
    categoria = models.OneToOneField(Producto_categoria, null=True, on_delete=models.CASCADE)
    link = models.CharField(max_length=4000, null=True)

class Producto(models.Model):
    ProductId = models.IntegerField(primary_key=True, null=False)
    ProductName = models.CharField(max_length=255, null=False)
    info = models.OneToOneField(Producto_info, on_delete=models.CASCADE)
    tiendaId = models.OneToOneField(Tienda, null=True, on_delete=models.CASCADE)

