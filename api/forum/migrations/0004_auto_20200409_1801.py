# Generated by Django 3.0.5 on 2020-04-09 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0003_auto_20200409_1415'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='parent',
        ),
        migrations.AddField(
            model_name='post',
            name='parent',
            field=models.ManyToManyField(blank=True, null=True, related_name='_post_parent_+', to='forum.Post'),
        ),
    ]
