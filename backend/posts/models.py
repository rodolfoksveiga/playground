from django.utils.translation import gettext_lazy as _
from django.db.models import (
    Model,
    DateTimeField,
    CharField,
    TextField,
    BooleanField,
    ImageField
)

class Post(Model):
    created_at = DateTimeField(
        _('Created at'),
        auto_now_add=True
    )
    title = CharField(
        _('Title'),
        max_length=200
    )
    body = TextField(
        _('Body (markdown file)')
    )
    image = ImageField(
        _('Image file'),
        upload_to='posts'
    )
    legend = CharField(
        _('Legend'),
        max_length=200
    )
    deleted = BooleanField(
        _('Deleted'),
        default=False
    )

    def __str__(self):
        return self.title

