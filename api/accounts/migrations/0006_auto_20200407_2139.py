# Generated by Django 3.0.5 on 2020-04-07 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20200407_2006'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='city_of_residence',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
