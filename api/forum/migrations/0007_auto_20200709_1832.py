# Generated by Django 3.0.8 on 2020-07-09 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0007_group_location'),
        ('forum', '0006_auto_20200709_1346'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='hashtag',
            new_name='hashtags',
        ),
        migrations.RemoveField(
            model_name='post',
            name='topic',
        ),
        migrations.AddField(
            model_name='post',
            name='topics',
            field=models.ManyToManyField(blank=True, null=True, related_name='TopicPosts', to='community.Hashtag'),
        ),
    ]
