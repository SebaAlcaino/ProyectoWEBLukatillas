# Generated by Django 4.2.2 on 2023-06-21 05:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuario',
            old_name='id_usuario',
            new_name='id_cliente',
        ),
    ]
