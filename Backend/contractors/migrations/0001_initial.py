# Generated by Django 5.0.2 on 2024-03-27 13:10

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projects', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Contractor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(default=' ', max_length=100)),
                ('last_name', models.CharField(default=' ', max_length=100)),
                ('expertise', models.CharField(max_length=100)),
                ('project', models.ManyToManyField(to='projects.project')),
                ('user', models.ForeignKey(default=' ', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
