# Generated by Django 4.2.7 on 2023-11-11 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_alter_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, default='post.png', null=True, upload_to='posts'),
        ),
    ]
