# Generated by Django 3.0.8 on 2020-07-06 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0006_media_author'),
        ('accounts', '0014_merge_20200518_2025'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='groups',
            field=models.ManyToManyField(blank=True, null=True, related_name='gropus', to='community.Group'),
        ),
    ]