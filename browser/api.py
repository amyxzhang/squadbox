import os
from functools import wraps
from django.shortcuts import render
def render_to(template=None, content_type=None):
    def renderer(function):
        @wraps(function)
        def wrapper(request, *args, **kwargs):
            output = function(request, *args, **kwargs)
            if not isinstance(output, dict):
                return output
            tmpl = output.pop('TEMPLATE', template)
            if tmpl is None:
                template_dir = os.path.join(*function.__module__.split('.')[:-1])
                tmpl = os.path.join(template_dir, function.func_name + ".html")
            # Explicit version check to avoid swallowing other exceptions
            return render(request, tmpl, output, content_type=content_type)
        return wrapper
    return renderer