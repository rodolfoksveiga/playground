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
    body = TextField()
    image = ImageField(upload_to='posts')
    deleted = BooleanField(
        default=False
    )

    def __str__(self):
        return self.title

